# Dev Portfolio Builder

App for developers to build their resume/portfolio.

**DEMO** [https://dev-portfolio-builder.netlify.app](https://dev-portfolio-builder.netlify.app)

![Screenshot](images/screen.png?raw=true "Screenshot")

# Features

1. Display skill-year map with slider
2. List of tools and additional skills
3. Projects with description and relevant links

# How to use this builder

1. Click on the `Use this template` button on the repository
2. Setup your new repository using the template
3. Customize the json objects in the `/data` directory (more info in the configuration section below)
4. Build and Deploy the react app ✨

# Configuration

All configuration is in the `/data` directory

## metadata.js

Contains all the metadata for the site. Comments on the file should indicate what each key represents.

## projects.js

This file contains all the projects to display. You could also configure this section to display previous jobs by setting the appropriate name in `metadata.js > PROJECTS_TITLE` and updating configuration for `projects.js`

Supported fields include `title`, `subtitle`, `details`, `tags`, `url` and `github`

## skills.js

This file contains all the skill mappings based on year and the icons to display for each of them.
Icons are pulled from [https://devicon.dev](https://devicon.dev)

**SKILLS_MAP** is a map of all the skills to display

**TOOLS** is an array of tools that are displayed under the skill map

**SKILL_TIMELINE** is an object with `<year>:[skills]` mapping. For each year you can add an array of skills. Note that these skills need to be from the `SKILLS_MAP`

**SKILL_ICONS** maps the skills from the `SKILLS_MAP` to icons from [Devicons](https://devicon.dev). In order to add an icon, copy the class from the corresponding devicon. If an icon is not provided for a skill, the skills map will show the skill text instead of the icon.

### Example: Adding a new skill

1. Add the new skill to `SKILLS_MAP`
2. Add the skill to all the relevant years in `SKILL_TIMELINE`
3. Add corresponding icon from devicons in `SKILL_ICONS`
