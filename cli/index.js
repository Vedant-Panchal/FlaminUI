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
  .version('1.0.2')
  .description('ProtoUI CLI for adding components and utilities');

program
  .command('init')
  .description('Initialize ProtoUI in your project')
  .action(async () => {
    console.log(chalk.blue('Initializing ProtoUI...'));
   
    const userComponentDir = path.join(process.cwd(), 'components', 'ui');
    const userUtilsDir = path.join(process.cwd(), 'utils');
   
    await fs.ensureDir(userComponentDir);
    await fs.ensureDir(userUtilsDir);
   
    // Copy utils from the npm package to the user's project
    const npmUtilsDir = path.join(__dirname, '..', 'utils');
    console.log('npmUtilsDir:', npmUtilsDir); // Debug print
   
    await fs.copy(npmUtilsDir, userUtilsDir);
   
    console.log(chalk.green('ProtoUI initialized successfully!'));
    console.log(chalk.yellow(`Components will be added to: ${userComponentDir}`));
    console.log(chalk.yellow(`Utils folder created at: ${userUtilsDir}`));
  });

program
  .command('add <component>')
  .description('Add a component to your project')
  .action(async (component) => {
    console.log(chalk.blue(`Adding ${component} to your project...`));
   
    const userComponentDir = path.join(process.cwd(), 'components', 'ui');
    const userComponentPath = path.join(userComponentDir, `${component}.tsx`);
   
    // Adjusted paths to use the npm package directory
    const libComponentDir = path.join(__dirname, '..', 'lib', 'components');
    const libComponentPath = path.join(libComponentDir, component, `${component}.tsx`);
   
    console.log('Npm components path:', libComponentPath); // Debug print
   
    if (await fs.pathExists(libComponentPath)) {
      await fs.copy(libComponentPath, userComponentPath);
      console.log(chalk.green(`${component} added successfully!`));
    } else {
      console.log(chalk.red(`Component ${component} not found in the library.`));
    }
  });

program.parse(process.argv);