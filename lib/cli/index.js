#!/usr/bin/env node

import { Command } from 'commander';
import chalk from 'chalk';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const program = new Command();

program
  .version('0.1.0')
  .description('ProtoUI CLI for adding components and utilities');

program
  .command('init')
  .description('Initialize ProtoUI in your project')
  .action(async () => {
    console.log(chalk.blue('Initializing ProtoUI...'));
    
    const componentDir = path.join(process.cwd(), 'components', 'ui');
    const utilsDir = path.join(process.cwd(), 'utils');
    
    await fs.ensureDir(componentDir);
    await fs.ensureDir(utilsDir);
    
    // Adjusted paths
    const libUtilsDir = path.join(__dirname, '..', 'utils');
    console.log('libUtilsDir:', libUtilsDir); // Debug print
    
    await fs.copy(libUtilsDir, utilsDir);
    
    console.log(chalk.green('ProtoUI initialized successfully!'));
    console.log(chalk.yellow(`Components will be added to: ${componentDir}`));
    console.log(chalk.yellow(`Utils folder created at: ${utilsDir}`));
  });

program
  .command('add <component>')
  .description('Add a component to your project')
  .action(async (component) => {
    console.log(chalk.blue(`Adding ${component} to your project...`));
    
    const componentDir = path.join(process.cwd(), 'components', 'ui');
    const componentPath = path.join(componentDir, `${component}.js`); //! Changed to .js because tsx or jsx not working because build of dist contains only tsx and jsx
    
    // Adjusted paths
    const libComponentDir = path.join(__dirname, '..', 'components');
    const libComponentPath = path.join(libComponentDir, component, `${component}.js`); //! Changed to .js because tsx or jsx not working because build of dist contains only tsx and jsx
    
    console.log('libComponentPath:', libComponentPath); // Debug print
    
    if (await fs.pathExists(libComponentPath)) {
      await fs.copy(libComponentPath, componentPath);
      console.log(chalk.green(`${component} added successfully!`));
    } else {
      console.log(chalk.red(`Component ${component} not found in the library.`));
    }
  });

program.parse(process.argv);
