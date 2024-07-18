#!/usr/bin/env node

import { Command } from 'commander';
import chalk from 'chalk';
import fs from 'fs-extra';
import path from 'path';

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
    
    // Copy utils from your library to the user's project
    const libUtilsDir = path.join(__dirname, '..', 'lib', 'utils');
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
    const componentPath = path.join(componentDir, `${component}.tsx`);
    
    // Path to your library's component folder
    const libComponentDir = path.join(__dirname, '..', 'lib', 'components');
    const libComponentPath = path.join(libComponentDir, component, `${component}.tsx`);
    
    if (await fs.pathExists(libComponentPath)) {
      await fs.copy(libComponentPath, componentPath);
      console.log(chalk.green(`${component} added successfully!`));
    } else {
      console.log(chalk.red(`Component ${component} not found in the library.`));
    }
  });

program.parse(process.argv);