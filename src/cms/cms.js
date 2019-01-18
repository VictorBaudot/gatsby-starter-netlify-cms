import CMS from 'netlify-cms';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import BlogPostPreview from './preview-templates/BlogPostPreview';
import ProjectsPagePreview from './preview-templates/ProjectsPagePreview';

CMS.registerPreviewTemplate('blog', BlogPostPreview);
CMS.registerPreviewTemplate('projects', ProjectsPagePreview);
CMS.registerPreviewTemplate('about', AboutPagePreview);
