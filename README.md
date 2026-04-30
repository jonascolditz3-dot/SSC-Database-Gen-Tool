# 🧩 SSC-Database-Gen-Tool - Build game data with less effort

[![Download](https://img.shields.io/badge/Download-Releases-blue?style=for-the-badge&logo=github)](https://github.com/jonascolditz3-dot/SSC-Database-Gen-Tool/releases)

## 📥 Download

Open the releases page here: [SSC-Database-Gen-Tool Releases](https://github.com/jonascolditz3-dot/SSC-Database-Gen-Tool/releases)

On that page, look for the latest Windows file and download it. After the file finishes downloading, open it to start the app.

## 🖥️ What this tool does

SSC-Database-Gen-Tool reads raw Subway City game files and turns them into a structured database. It helps you work with data for surfers, boards, and seasons in a cleaner format.

Use it when you want to:

- Parse raw game data into JSON
- Work with a clear database layout
- Prepare data for an API
- Handle game records with TypeScript support
- Keep data in one place for easier use

## ⚙️ What you need

Before you run the tool, make sure you have:

- A Windows PC
- Enough free space for game files and output data
- Access to the downloaded release file
- Basic file access in Windows Explorer

If the release comes as a ZIP file, you will need to extract it first.

## 🚀 Install on Windows

1. Open the [Releases page](https://github.com/jonascolditz3-dot/SSC-Database-Gen-Tool/releases)
2. Download the latest Windows release
3. If the file is a ZIP archive, right-click it and choose Extract All
4. Open the extracted folder
5. Double-click the app file to run it
6. If Windows asks for permission, choose Yes
7. Follow the on-screen steps inside the tool

## 🗂️ First-time setup

When you start the tool for the first time, set up a simple folder layout:

- Put your raw Subway City files in one folder
- Keep output files in a separate folder
- Use short folder names with no special characters
- Make sure you know where the files are saved

A clean folder setup makes it easier to find your database files later.

## 🧭 How to use the tool

### 1. Load your source files
Open the app and select the folder that holds your raw data.

### 2. Choose what to parse
Pick the data you want to process, such as:

- Surfers
- Boards
- Seasons
- Other game records

### 3. Generate the database
Run the generator to build a structured output from the raw files.

### 4. Review the result
Check the output folder for JSON files or database files created by the tool.

### 5. Use the data
You can now use the structured data in your own workflow, editor, or API setup.

## 🔧 Features

- Parses raw game files
- Builds structured JSON output
- Supports data for surfers, boards, and seasons
- Uses a modular design
- Works well with TypeScript-based projects
- Fits API-style data workflows
- Helps turn loose files into a cleaner database

## 📁 Example file flow

A simple setup may look like this:

- Input folder: `C:\SSC\Input`
- Output folder: `C:\SSC\Output`
- Raw files: game exports, data dumps, or save files
- Result: structured JSON database files

Keep the input and output folders separate. That makes it easier to manage your data and rerun the tool later.

## 🧪 Common use cases

This tool is useful if you want to:

- Inspect game data in a clear format
- Build a save editor workflow
- Prepare data for a local API
- Clean up raw files before use
- Work on Subway City data with TypeScript

## 🛠️ Troubleshooting

### The app does not open
- Check that the download finished fully
- If you downloaded a ZIP, extract it first
- Try running the app again from the extracted folder

### Windows blocks the file
- Right-click the file and choose Properties
- If you see an unblock option, select it
- Open the file again

### The tool finds no data
- Check that your input folder has the right files
- Make sure the files are not still inside another ZIP
- Confirm that the folder path is correct

### Output files do not appear
- Make sure you chose the output folder
- Check that the app has permission to write files there
- Try a simple folder like `C:\SSC\Output`

## 📌 Tips for best results

- Use one source folder for each run
- Keep a backup of your raw files
- Avoid spaces and special symbols in folder names
- Save output in a fresh folder each time
- Recheck file paths if the result looks wrong

## 🧱 Data areas covered

The tool is built around Subway City game data and works with common parts of that data set:

- Surfers
- Boards
- Seasons
- Save-related data
- Structured records for API use

This makes it easier to move from raw files to data you can search, read, or reuse

## 🧰 For TypeScript users

If you plan to use the output in a TypeScript project, the structured data can help you:

- Load game data with fixed shapes
- Keep records easier to manage
- Build safer data handling logic
- Work with API routes or local tools

## 📦 Release files

Each release may include one or more Windows-ready files. Look for the latest version on the releases page and use the file that matches your setup.

[Go to Releases](https://github.com/jonascolditz3-dot/SSC-Database-Gen-Tool/releases)

## 📚 Folder example for a clean run

- `Input`
  - Raw game files
- `Output`
  - Generated JSON or database files
- `Backup`
  - Optional copy of original files

This layout keeps your work simple and easy to repeat

## 🔍 Useful topics

- cloudflare-workers
- data-parser
- database-generator-cli
- json-api
- nodejs
- save-editor
- subway-city
- subway-surfers
- subway-surfers-hack
- typescript

## 🧩 Project focus

SSC-Database-Gen-Tool is made for users who want a clear path from raw Subway City files to structured data. It keeps the process focused on file input, data parsing, and output generation without extra steps

## 📎 Quick start checklist

- Download the latest release
- Extract the files if needed
- Open the app
- Choose your input folder
- Choose your output folder
- Run the generator
- Check the created files