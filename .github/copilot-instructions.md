# Fast Track Academy Website Repository

Fast Track Academy is an educational platform revolutionizing learning through AI and technology. This repository contains documentation, educational content, and will grow to include web applications and learning materials for the educational platform.

**ALWAYS follow these instructions first and only fallback to additional search and context gathering if the information in these instructions is incomplete or found to be in error.**

## Working Effectively

### Repository Setup and Basic Operations
- Clone the repository: `git clone https://github.com/Fast-Track-Academy/website.git`
- Navigate to repository: `cd website`
- Check repository status: `git status`
- View repository contents: `ls -la`
- **CRITICAL**: All git operations complete in under 30 seconds - no special timeouts needed
- Current repository structure:
  ```
  /
  ├── README.md           # Main documentation and mission statement
  ├── .git/              # Git metadata
  └── .github/           # GitHub configuration and workflows
      └── copilot-instructions.md  # This file
  ```

### Current Build and Test Status
- **NO BUILD SYSTEM EXISTS YET** - Do not attempt to run npm install, make, or any build commands
- **NO TESTING FRAMEWORK EXISTS YET** - Do not attempt to run npm test, pytest, or any test commands  
- **NO LINTING CONFIGURED YET** - Do not attempt to run eslint, prettier, or any linting commands
- **This is a documentation-only repository currently** - Only git operations and file editing work

### Development Workflow
- Always create feature branches: `git checkout -b feature/your-feature-name`
- Make changes and commit frequently: `git add . && git commit -m "descriptive message"`
- Push changes: `git push origin your-branch-name`
- Create pull requests through GitHub interface
- **NEVER** push directly to main branch
- **All git operations complete in under 30 seconds - no timeout concerns**

### Documentation Editing
- Edit README.md using any text editor
- Validate markdown syntax: `markdown-lint README.md` (if markdown linter is installed)
- Preview changes locally using GitHub's markdown preview or IDE preview
- Always test that links work and formatting displays correctly

## Validation Requirements

### MANDATORY Validation Steps for ALL Changes
**Execute EVERY step below before considering any change complete:**

1. **Content Review**: Read through ALL edited content for clarity, accuracy, and consistency with Fast Track Academy mission
2. **Link Validation**: Test ALL internal and external links manually by opening them
3. **Markdown Formatting**: Preview markdown rendering using GitHub preview or IDE preview
4. **Git Status Check**: Run `git status` and ensure no unexpected files are staged
5. **Diff Review**: Run `git diff` and review EVERY line change for correctness
6. **Commit Message Validation**: Ensure commit messages are descriptive and follow format: "verb: description"
7. **Branch Verification**: Confirm you're on correct feature branch, not main branch

### Manual Testing Scenarios
**After making any changes, ALWAYS perform these end-to-end validation steps:**

#### Documentation Changes
1. **Read-through test**: Read the entire README.md from start to finish
2. **Link testing**: Click every link in changed content (Discord, GitHub Discussions, YouTube currently empty but should not error)
3. **Formatting verification**: Check that all emoji headers display correctly
4. **Content flow**: Verify logical progression from mission → framework → resources → community
5. **Grammar check**: Use built-in spell check in your editor

#### File Operations  
1. **File listing**: Run `ls -la` and verify expected files are present
2. **Git tracking**: Run `git status` and verify only intended files are modified
3. **File permissions**: Ensure new files have appropriate read/write permissions

#### Repository Integrity
1. **Commit history**: Run `git log --oneline -5` and verify commits make sense
2. **Branch status**: Run `git branch` and confirm you're on the correct branch
3. **Remote sync**: Run `git status` and ensure branch is properly tracking origin

### Git Operations Validation  
- Before committing: `git diff` to review changes
- After committing: `git log --oneline -3` to verify commit messages
- Before pushing: `git status` to ensure working tree is clean
- **All git commands complete in under 30 seconds - no timeout needed**

## Current State and Limitations

### What Works
- Repository is fully functional for documentation and content management
- Git operations work normally (clone, branch, commit, push)
- Markdown editing and viewing work correctly
- GitHub Issues and Pull Request workflows are active

### What's Not Yet Implemented
- No build system configured (no package.json, Makefile, or build scripts)
- No automated testing infrastructure
- No CI/CD pipelines (beyond basic GitHub workflows)
- No web application framework (React, Next.js, etc.) yet configured
- No package managers (npm, yarn) configured
- No linting or formatting tools configured

### Future Development Notes
The repository mentions these technologies in README.md that may be added later:
- Python, JavaScript, React, Node.js
- GitHub, VSCode, Figma, Blender

**When these technologies are added, YOU MUST update these instructions with:**
- **Exact installation commands with URLs for SDKs and dependencies**
- **Build processes with EXPLICIT timeout values (60+ minutes for builds, 30+ minutes for tests)**
- **"NEVER CANCEL" warnings for all long-running operations**
- **Complete testing procedures with expected time durations**
- **Development server startup instructions with port numbers and URLs**
- **Linting and formatting commands that must be run before committing**

**Examples of what to add when technologies are implemented:**
```bash
# Example for when Node.js is added:
# Install Node.js: wget https://nodejs.org/dist/v20.0.0/node-v20.0.0-linux-x64.tar.xz
# Extract and setup: tar -xf node-v20.0.0-linux-x64.tar.xz && export PATH=$PATH:./node-v20.0.0-linux-x64/bin
# Install dependencies: npm install -- NEVER CANCEL: takes 5-10 minutes
# Build application: npm run build -- NEVER CANCEL: takes 15-30 minutes. Set timeout to 45+ minutes.
# Run tests: npm test -- NEVER CANCEL: takes 10-15 minutes. Set timeout to 30+ minutes.
# Start dev server: npm run dev -- access at http://localhost:3000
```

## Issue Management

### Current Issues
- Issue #6: Set up Copilot instructions (this file addresses this issue)

### Creating Issues
- Use descriptive titles
- Include clear steps to reproduce for bugs
- Tag with appropriate labels
- Reference related issues when applicable

## Content Guidelines

### Editing README.md and Documentation
- Maintain the existing emoji-based section headers
- Keep content aligned with educational mission
- Use clear, accessible language appropriate for diverse learners
- Include specific examples and actionable information
- Preserve the structure: mission → framework → resources → community

### Adding New Content
- Create new markdown files in appropriate directories
- Link from README.md or other navigation documents
- Follow existing formatting conventions
- Include relevant metadata (creation date, author, etc.)

## Common Tasks Reference

### VALIDATED Commands That Work (Tested and Confirmed)
**These commands have been tested and work correctly in this repository:**

```bash
# Repository exploration
cd /path/to/website
ls -la                          # Shows: .git/, .github/, README.md
git status                      # Shows branch and working tree status
git branch -a                   # Shows available branches
git remote -v                   # Shows: origin https://github.com/Fast-Track-Academy/website

# File operations  
cat README.md                   # Displays full README content
head -20 README.md              # Shows first 20 lines
wc -l README.md                 # Shows line count (currently 145 lines)
grep -c "^#" README.md          # Counts markdown headers

# Git operations
git diff                        # Shows unstaged changes (empty when clean)
git log --oneline -5            # Shows recent commits
git log --oneline --graph -5    # Shows commit graph

# Directory operations
mkdir -p .github                # Creates .github directory
ls -la .github/                 # Lists .github contents
```

### Repository Root Contents (Current State)
```
ls -la
total 24
drwxr-xr-x 4 runner runner 4096 [date] .
drwxr-xr-x 3 runner runner 4096 [date] ..
drwxrwxr-x 7 runner runner 4096 [date] .git
drwxrwxr-x 2 runner runner 4096 [date] .github
-rw-rw-r-- 1 runner runner 4579 [date] README.md
```

### Git Status Clean State
```
git status
On branch [branch-name]
Your branch is up to date with 'origin/[branch-name]'.

nothing to commit, working tree clean
```

### README.md Overview
The README.md contains:
- Fast Track Academy mission and goals (3x faster learning, AI collaboration)
- Learning framework with 6 core areas (STEM, Digital Creation, Creative Arts, Communication, Global Awareness, Entrepreneurship)
- Technology stack mention (Python, JavaScript, React, Node.js)
- Success stories and learning analytics
- Community and support information
- MIT License commitment to open education

## Time Expectations and Timeout Guidelines

### Current Repository Operations (All Fast - No Timeout Concerns)
- Git clone: 5-15 seconds
- Git status/diff: 1-3 seconds  
- Git commit: 1-5 seconds
- Git push: 5-15 seconds
- Markdown editing: Immediate
- File viewing: < 1 second
- Directory listing: < 1 second

### Documentation Tasks
- Reading README.md completely: 5-10 minutes
- Editing content (minor changes): 5-15 minutes
- Editing content (major sections): 15-45 minutes
- Reviewing changes thoroughly: 5-15 minutes
- Creating pull request: 5-10 minutes

### **CRITICAL TIMEOUT WARNINGS for Future Development:**
When build systems are added to this repository, you MUST use these timeout values:

- **Node.js builds**: NEVER CANCEL - Set timeout to 60+ minutes (builds commonly take 30-45 minutes)
- **Python builds**: NEVER CANCEL - Set timeout to 45+ minutes (builds commonly take 20-30 minutes)  
- **Test suites**: NEVER CANCEL - Set timeout to 30+ minutes (tests commonly take 10-20 minutes)
- **Docker builds**: NEVER CANCEL - Set timeout to 90+ minutes (builds commonly take 45-60 minutes)
- **Asset compilation**: NEVER CANCEL - Set timeout to 45+ minutes (compilation commonly takes 15-30 minutes)

**DO NOT use default timeouts (120 seconds) for any build operations - they WILL fail.**

## Troubleshooting

### Common Issues
- **Permission denied during git operations**: Ensure proper authentication with GitHub
- **Markdown not rendering**: Check syntax using markdown validator
- **Links broken**: Verify file paths and external URLs
- **Branch conflicts**: Use `git status` and `git diff` to understand changes

### Recovery Commands
- Discard local changes: `git checkout -- filename`
- View recent commits: `git log --oneline -10`
- Check differences: `git diff HEAD~1`
- Reset to last commit: `git reset --hard HEAD` (use with caution)

Remember: This repository is in early stages and will evolve. Update these instructions as new development tools, frameworks, and processes are added to the project.