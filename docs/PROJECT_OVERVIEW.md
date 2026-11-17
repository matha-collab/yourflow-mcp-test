# YourFlow MCP Test - Project Overview

## Overview

YourFlow is a project used to explore how AI agents can work with Jira and GitHub through the Model Context Protocol (MCP). This repository, `matha-collab/yourflow-mcp-test`, is a public dummy repository used only for integration testing. It contains no production code and no confidential information.

## Purpose of This Experiment

This experiment checks that an AI agent can complete a documentation task end to end:

- Read a task description from Jira (YOURFLOW-183).
- Inspect a designated test repository through MCP.
- Create a feature branch from the default branch.
- Write or update a Markdown documentation file.
- Commit the change to the feature branch.
- Open a **draft** pull request against the default branch for human review.

Success means the agent can perform each step without pushing directly to the default branch and without merging anything.

## Jira-to-GitHub Workflow

1. **Read the task.** The agent reads the Jira issue to learn what documentation is required.
2. **Inspect the repository.** The agent lists files and reads existing Markdown documentation.
3. **Branch.** The agent creates `experiment/yourflow-183-docs` from `main`.
4. **Commit.** The agent updates `docs/PROJECT_OVERVIEW.md` on that branch.
5. **Open a draft pull request.** The agent opens a draft pull request targeting `main` that references YOURFLOW-183.
6. **Review.** A human reviews the draft. The pull request is never merged by the agent.

## Restrictions

- This repository contains no confidential company information.
- The default branch is never modified directly.
- Pull requests are created as drafts only and are not merged by the agent.
- Files are not deleted as part of this experiment.
"