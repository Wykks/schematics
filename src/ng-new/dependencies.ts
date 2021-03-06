import { NodeDependencyType } from '@schematics/angular/utility/dependencies';

export const baseDependencies = [
  {
    type: NodeDependencyType.Dev,
    name: 'husky',
    version: '^4.0.0',
  },
  {
    type: NodeDependencyType.Dev,
    name: 'lint-staged',
    version: '^10.0.0',
  },
  {
    type: NodeDependencyType.Dev,
    name: 'prettier',
    version: '~2.2.0',
  },
  {
    type: NodeDependencyType.Dev,
    name: 'tslint-config-prettier',
    version: '~1.18.0',
  },
  {
    type: NodeDependencyType.Dev,
    name: 'typescript-tslint-plugin',
    version: '^1.0.0',
  },
  {
    type: NodeDependencyType.Dev,
    name: 'commitizen',
    version: '^4.0.0',
  },
  {
    type: NodeDependencyType.Dev,
    name: 'cz-conventional-changelog',
    version: '^3.0.0',
  },
];

export const jestDependencies = [
  {
    type: NodeDependencyType.Dev,
    name: '@types/jest',
    version: '^26.0.0',
  },
  {
    type: NodeDependencyType.Dev,
    name: '@angular-builders/jest',
    version: '^10.0.0',
  },
  {
    type: NodeDependencyType.Dev,
    name: 'jest',
    version: '^26.0.0',
  },
];

// Extras
jestDependencies.push({
  type: NodeDependencyType.Dev,
  name: 'ng-mocks',
  version: '^11.0.0',
});
jestDependencies.push({
  type: NodeDependencyType.Dev,
  name: '@ngneat/spectator',
  version: '^6.0.0',
});
