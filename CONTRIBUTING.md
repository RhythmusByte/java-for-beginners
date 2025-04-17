# Contributing Guide

We welcome contributions from developers of all skill levels! Here's how you can help improve Java for Beginners:

<div align="center">

[![Open in GitHub Codespaces](https://img.shields.io/badge/Open%20in-Codespaces-4f46e5?style=flat-square)](https://codespaces.new/RhythmusByte/java-for-beginners)
[![Good First Issues](https://img.shields.io/badge/-Good%20First%20Issue-4f46e5?style=flat-square)](https://github.com/RhythmusByte/java-for-beginners/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22)

</div>

## 🚀 Getting Started

1. **Set Up Development Environment**
   ```bash
   git clone https://github.com/RhythmusByte/java-for-beginners.git
   cd java-for-beginners
   npm install
   npm run dev
   ```

2. **Find an Issue**  
   Check our [Good First Issues](https://github.com/RhythmusByte/java-for-beginners/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22) or propose new improvements

## 🔄 Development Workflow

### Branch Naming
```bash
git checkout -b <type>/<short-description>
# Examples:
# feat/add-new-project
# fix/navbar-overflow
# docs/update-readme
```

### Commit Messages
Follow [Conventional Commits](https://www.conventionalcommits.org) format:
```
<type>(<scope>): <description>
# Example:
# feat(projects): add number guessing game
# fix(homepage): correct mobile layout
```

### Pull Request Template
```markdown
## What's Changed
- [ ] New feature (non-breaking change)
- [ ] Bug fix (non-breaking change)
- [ ] Documentation update

## Related Issues
Closes #ISSUE_NUMBER

## Screenshots/GIFs
<!-- Add visual proof if applicable -->

## Checklist
- [ ] Self-reviewed code
- [ ] Added/updated tests
- [ ] Updated documentation
- [ ] Verified responsiveness
```

## 🛠 Code Standards

### Style Guidelines
1. **Tailwind CSS**  
   - Use utility classes first
   - Keep custom CSS in `index.css`
   - Follow responsive design patterns

2. **React Components**
   - Functional components only
   - TypeScript-like prop destructuring
   - Descriptive component names

3. **Code Quality**
   ```bash
   npm run lint    # ESLint check
   npm run format  # Prettier formatting
   ```

### Documentation
- Update `projectsData.js` when adding new projects
- Include code comments for complex logic
- Add JSDoc for helper functions

## 🌐 Community Guidelines

- Be respectful and inclusive
- Use discussion tab for feature proposals
- Follow our [Code of Conduct](CODE_OF_CONDUCT.md)

<div align="center" style="margin-top: 2rem">

✨ Thank you for contributing to beginner Java education! ✨

</div>
