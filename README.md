# GPG Products — Herbal Tea Landing Page

Professional landing page template for GPG health supplement products.
Built with pure HTML, CSS and vanilla JavaScript. Zero dependencies.

## 🚀 Live Demo
> After GitHub Pages setup: `https://YOURUSERNAME.github.io/gpg-products`

---

## 📁 Project Structure

```
gpg-herbal-tea/
├── index.html          ← Main landing page (edit content here)
├── css/
│   └── style.css       ← All styles + CSS variables for theming
├── js/
│   └── main.js         ← FAQ accordion, video loader, scroll effects
├── images/
│   ├── gpg-herbal-tea.png   ← Product box photo
│   └── ingredients/         ← Herb ingredient photos
├── video/
│   └── testimonial.mp4      ← Customer testimonial video
└── README.md
```

---

## ✅ Checklist — What To Add Before Going Live

- [ ] Replace `images/gpg-herbal-tea.png` with the real product photo
- [ ] Add ingredient photos to `images/` folder (see prompts below)
- [ ] Replace all `2348000000000` with the real WhatsApp number
- [ ] Replace `+234 800 000 0000` in the footer with real phone number
- [ ] Add `video/testimonial.mp4` (received via WhatsApp)
- [ ] Update customer reviews with real testimonials from the client
- [ ] Confirm NAFDAC reg number and add it to the Trust Bar
- [ ] Update delivery info if needed

---

## 🎨 Free Ingredient Image Sources

| Ingredient       | Search Term               | Best Site      |
|-----------------|--------------------------|----------------|
| Ginger Root     | "ginger root fresh"       | unsplash.com   |
| Bitter Kola     | "garcinia kola nuts"      | pexels.com     |
| Bitter Leaf     | "vernonia amygdalina"     | freepik.com    |
| Citrus Extract  | "citrus slices bright"    | unsplash.com   |
| Cloves/Syzygium | "cloves spice macro"      | pexels.com     |
| Utazi Leaf      | "utazi leaf Nigeria"      | Google Images  |
| Aromatum        | "African aromatic spice"  | freepik.com    |

### AI Image Prompts (Midjourney / Adobe Firefly / Leonardo AI)
```
"Close-up studio photo of [HERB NAME], fresh whole ingredient on a clean white surface,
natural lighting, sharp focus, food photography style, 4K resolution"
```

---

## 🌈 Theming for Other Products (12-product system)

To create a new product page:
1. Copy `index.html` → rename to e.g. `gpg-u7.html`
2. Change the CSS variables in `style.css` OR override them in the HTML:
```css
/* For dark dramatic products like GPG U7 */
:root {
  --green-dark: #0a1f05;
  --green-mid:  #1a5c0a;
  --cream:      #fdf8ee;
}
```
3. Update product name, benefits, ingredients, price, images
4. That's it — the entire layout reuses automatically ✅

---

## 🐙 GitHub Pages Deployment

```bash
# 1. Initialise git in this folder
git init

# 2. Add all files
git add .

# 3. First commit
git commit -m "Initial build: GPG Herbal Tea landing page"

# 4. Connect to your GitHub repo (create it on github.com first)
git remote add origin https://github.com/YOURUSERNAME/gpg-products.git

# 5. Push
git push -u origin main
```

Then on GitHub:
- Go to repo **Settings** → **Pages**
- Source: `main` branch → `/ (root)` → **Save**
- Site will be live in ~2 minutes at `https://YOURUSERNAME.github.io/gpg-products`

---

## 📱 Video — How to Add Your WhatsApp Video

**Option A — Direct file (simplest):**
1. Save the WhatsApp video to your computer
2. Rename it `testimonial.mp4`
3. Drop it into the `/video/` folder
4. In `index.html`, find the comment `REAL VIDEO TAG` and uncomment the `<video>` block

**Option B — YouTube (recommended for speed):**
1. Upload to YouTube (can be set to Unlisted)
2. Copy the video ID from the URL
3. In `index.html`, replace the video section with:
```html
<iframe width="100%" height="450"
  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
  frameborder="0" allowfullscreen
  style="border-radius:16px;display:block">
</iframe>
```

---

Built by [Your Name] · Professional Web Developer
