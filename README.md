# Personal homepage starter

A minimalist Jekyll + GitHub Pages template with three horizontal tabs: **Intro**, **Blog**, and **Papers**. The initial view is a photography gallery. Clicking **Intro** replaces the gallery entirely with your biography; Blog and Papers replace it with their own content.

## Customize

1. Replace `Your Name`, profile links, email, experience, education, and research interests in `index.html`.
2. Update `_config.yml` with your GitHub Pages URL and site title.
3. Add your own images under `assets/photos/` and update the filenames/alt text in the gallery section of `index.html`. The repository includes no placeholder photographs, so add files named `photo-01.jpg` through `photo-10.jpg` or change the image paths.
4. Add blog posts to `_posts/` using filenames like `2026-10-14-my-topic.md` and the front matter shown in the example.
5. Edit `_data/papers.yml` to list selected publications.

## Publish with GitHub Pages

1. Create a repository named `YOUR-USERNAME.github.io`.
2. Upload these files to the repository root.
3. In **Settings → Pages**, choose deployment from the `main` branch and `/ (root)` if required.
4. Update `_config.yml` and the social links, then wait for GitHub Pages to build the site.

The template uses standard Jekyll layouts and Markdown posts. The tab switching is client-side and supports keyboard navigation. The gallery is the default view; `#intro`, `#blog`, and `#papers` can open the corresponding tab directly.
