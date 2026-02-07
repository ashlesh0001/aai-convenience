# Git Branching Strategy

This repository follows a structured branching workflow to ensure code quality and proper review processes.

## Branch Structure

### Protected Branches

- **`main`** - Production-ready code
  - ⚠️ **Protected**: Requires pull request with 1 approval before merging
  - Direct pushes are disabled
  - Only merge via pull requests from `develop` or `hotfix/*`

- **`develop`** - Integration branch for ongoing development
  - All feature branches merge here first
  - Regular testing and integration happens here
  - Periodically merged to `main` via pull request

### Working Branches

Use the following naming conventions for your working branches:

#### Feature Branches
```
feat/<feature-name>
```
- For new features or enhancements
- Branch from: `develop`
- Merge back to: `develop`
- Example: `feat/add-newsletter-signup`, `feat/new-product-section`

#### Bugfix Branches
```
bugfix/<bug-name>
```
- For non-critical bug fixes
- Branch from: `develop`
- Merge back to: `develop`
- Example: `bugfix/fix-contact-form`, `bugfix/mobile-menu-alignment`

#### Hotfix Branches
```
hotfix/<issue-name>
```
- For critical production bugs that need immediate fixing
- Branch from: `main`
- Merge back to: **both** `main` AND `develop`
- Example: `hotfix/broken-phone-link`, `hotfix/map-not-loading`

#### Chore Branches
```
chore/<task-name>
```
- For maintenance tasks (dependencies, configs, documentation)
- Branch from: `develop`
- Merge back to: `develop`
- Example: `chore/update-dependencies`, `chore/add-comments`

## Workflow Examples

### Adding a New Feature

```bash
# 1. Start from develop
git checkout develop
git pull origin develop

# 2. Create feature branch
git checkout -b feat/add-testimonials

# 3. Make your changes and commit
git add .
git commit -m "Add customer testimonials section"

# 4. Push to remote
git push -u origin feat/add-testimonials

# 5. Create pull request on GitHub
gh pr create --base develop --head feat/add-testimonials \
  --title "Add customer testimonials section" \
  --body "Adds a new section showcasing customer reviews"

# 6. After review and approval, merge via GitHub
# 7. Delete the feature branch
git branch -d feat/add-testimonials
git push origin --delete feat/add-testimonials
```

### Fixing a Critical Bug (Hotfix)

```bash
# 1. Start from main
git checkout main
git pull origin main

# 2. Create hotfix branch
git checkout -b hotfix/fix-broken-link

# 3. Fix the bug and commit
git add .
git commit -m "Fix broken contact phone link"

# 4. Push to remote
git push -u origin hotfix/fix-broken-link

# 5. Create PR to main
gh pr create --base main --head hotfix/fix-broken-link \
  --title "Hotfix: Fix broken contact phone link" \
  --body "Fixes critical bug where phone link was not working"

# 6. After merging to main, also merge to develop
git checkout develop
git pull origin develop
git merge hotfix/fix-broken-link
git push origin develop

# 7. Delete the hotfix branch
git branch -d hotfix/fix-broken-link
git push origin --delete hotfix/fix-broken-link
```

### Releasing to Production

```bash
# 1. Ensure develop is ready for release
git checkout develop
git pull origin develop

# 2. Create PR from develop to main
gh pr create --base main --head develop \
  --title "Release: v1.1.0" \
  --body "Deploy new features and improvements to production"

# 3. After review and approval, merge via GitHub
# 4. Tag the release (optional)
git checkout main
git pull origin main
git tag -a v1.1.0 -m "Release version 1.1.0"
git push origin v1.1.0
```

## Pull Request Guidelines

### Creating a Pull Request

- Use descriptive titles following the pattern: `<type>: <description>`
  - Examples: `feat: Add payment methods section`, `bugfix: Fix mobile menu`, `hotfix: Urgent map fix`
- Include a clear description of what changed and why
- Reference any related issues (e.g., "Closes #123")
- Request review from at least 1 person

### Reviewing a Pull Request

- Check code quality and consistency
- Test functionality locally if needed
- Provide constructive feedback
- Approve only when you're confident in the changes

### Merging

- Use "Squash and merge" for feature branches to keep history clean
- Use "Create a merge commit" for releases (develop → main)
- Delete branch after merging (GitHub will prompt you)

## Quick Reference

| Branch Type | Branch From | Merge To | Naming |
|------------|-------------|----------|---------|
| Feature | `develop` | `develop` | `feat/*` |
| Bugfix | `develop` | `develop` | `bugfix/*` |
| Hotfix | `main` | `main` + `develop` | `hotfix/*` |
| Chore | `develop` | `develop` | `chore/*` |

## Branch Protection Rules

- **Main branch**:
  - ✅ Require pull request before merging
  - ✅ Require 1 approval
  - ✅ Dismiss stale reviews when new commits are pushed
  - ❌ No force pushes
  - ❌ No deletions

## Tips

- Keep branches focused on a single feature/fix
- Update your branch regularly with the latest from `develop`
- Write clear commit messages
- Test your changes before creating a PR
- Delete merged branches to keep the repository clean
