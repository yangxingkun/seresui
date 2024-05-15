import boxen from 'boxen';
import chalk from 'chalk';

export function box(message, title, boxTitle, options) {
  return (
    boxen(
      [boxTitle, title, '', chalk.white(message)].join('\n'),
      Object.assign(
        {
          borderColor: 'white',
          borderStyle: 'round',
          padding: 1,
          margin: 1
        },
        options
      )
    ) + '\n'
  );
}

export function successBox(message, title) {
  return box(message, chalk.green(title), chalk.green('✔ Success'), {
    borderColor: 'green'
  });
}

export function errorBox(message, title) {
  return box(message, chalk.red(title), chalk.red('✖ Error'), {
    borderColor: 'red'
  });
}
