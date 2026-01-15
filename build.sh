#!/bin/bash
# build.sh - Inject environment variables into HTML files

# Get API_BASE_URL from environment or use default
API_BASE_URL=${API_BASE_URL:-"http://localhost:3000"}

echo "🔧 Building with API_BASE_URL: $API_BASE_URL"

# Create output directory
mkdir -p dist

# Replace placeholder in HTML files
for file in *.html; do
  if [ -f "$file" ]; then
    echo "📝 Processing $file..."
    sed "s|{{API_BASE_URL}}|$API_BASE_URL|g" "$file" > "dist/$file"
  fi
done

# Copy other static files
cp *.css dist/ 2>/dev/null || true
cp *.js dist/ 2>/dev/null || true
cp -r assets dist/ 2>/dev/null || true

echo "✅ Build completed! Files in dist/"