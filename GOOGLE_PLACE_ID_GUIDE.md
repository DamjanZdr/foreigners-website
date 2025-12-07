# Finding Your Google Business Profile & Place ID

## Problem: Widget Services Can''t Find Your Business

If Elfsight, EmbedSocial, or other widget services can''t find your Google Business Profile, here are the solutions:

## Method 1: Use Google Place ID Finder (EASIEST)

1. **Go to Google Place ID Finder**: https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder

2. **Search for your business**:
   - Enter your full business name
   - Add your city/location (e.g., "Your Business Name, Warsaw, Poland")
   - Or use your full address

3. **Copy the Place ID**:
   - Once found, you''ll see a Place ID like: `ChIJgUbEo8cfqokR5lP9_Wh_DaM`
   - Copy this entire ID

4. **Use in Widget Service**:
   - Most widget services have a "Place ID" field
   - Paste your Place ID directly instead of searching by name

## Method 2: Get Place ID from Google Maps

1. **Open Google Maps**: https://www.google.com/maps

2. **Search for your business**:
   - Type your business name and location
   - Click on your business listing

3. **Get the Place ID from URL**:
   - Look at the URL in your browser
   - You''ll see something like: `https://www.google.com/maps/place/...`
   - The Place ID is in the URL after `!1s` or `place/`
   
   OR use this trick:
   - Right-click on your business marker
   - Select "What''s here?"
   - At the bottom, you''ll see coordinates
   - Click on the coordinates
   - The Place ID will be in the left panel or URL

## Method 3: Use Google Business Profile

1. **Go to Google Business Profile**: https://business.google.com/

2. **Select your business**

3. **Click "Get more reviews"**:
   - You''ll see a review link like: `https://g.page/r/XXXXXXXX/review`
   - The X''s are part of your Place identifier

4. **Convert to Place ID**:
   - Some widgets accept this short code
   - Otherwise, use Method 1 or 2

## Method 4: Ensure Your Business is Verified

If your business truly can''t be found:

1. **Verify your Google Business Profile**:
   - Go to https://business.google.com/
   - Make sure your profile is verified (has a checkmark)
   - Complete all business information

2. **Check visibility**:
   - Make sure your business is not hidden or suspended
   - Ensure it''s published and visible to the public

3. **Wait for indexing**:
   - If you just created/verified your business, wait 24-48 hours
   - Google needs time to index new businesses

## Common Issues & Solutions

### Issue: "Business not found" in widget
- **Solution**: Use Place ID directly instead of searching by name

### Issue: Widget shows wrong business
- **Solution**: Use exact Place ID from Google Place ID Finder

### Issue: No reviews showing
- **Solution**: 
  - Check if your business actually has Google reviews
  - Some businesses may have reviews disabled
  - Ensure reviews are public

### Issue: Place ID doesn''t work
- **Solution**: 
  - Make sure you copied the complete Place ID
  - Try refreshing the Place ID (they can expire after 12 months)
  - Use the Google Place ID Finder to get a fresh one

## For Your Website Implementation

Once you have your Place ID, update the GoogleReviewsSection.tsx file:

1. Replace `YOUR_GOOGLE_PLACE_ID` in the "Write a Review" button
2. Use the Place ID when setting up your widget service
3. Copy the widget embed code
4. Replace the placeholder section with the actual widget code

## Recommended Widget Services

### Elfsight (Recommended)
- Website: https://elfsight.com/google-reviews-widget/
- Free tier available
- Easy setup with Place ID
- Good customization options

### EmbedSocial
- Website: https://embedsocial.com/products/reviews/
- Professional features
- Accepts Place ID directly

### Widgets for Google Reviews (WordPress)
- If using WordPress
- Free plugin available

## Need Help?

If you still can''t find your business:
1. Make sure it exists on Google Maps
2. Verify the business name matches exactly
3. Check that reviews are enabled for your business type
4. Contact the widget service support with your business details