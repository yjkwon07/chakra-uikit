module.exports = {
  /* 프로젝트의 사용 환경 */
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  /* 플러그인은 일련의 규칙 집합 */
  plugins: [
    // 플러그인을 추가하여도 규칙은 적용되지 않는다.
    'react',
    'react-hooks',
    '@typescript-eslint',
    'import',
    'prettier',
    'chakra-ui',
  ],
  /* extends는 추가한 플러그인에서 사용할 규칙 설정 */
  extends: [
    // 규칙을 적용하기 위해서는 추가한 플러그인 중, 사용할 규칙 추가
    'airbnb',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended', // eslint에서 규칙을 비활성화 하는 호환성을 위한 규칙 모음
    'plugin:prettier/recommended',
  ],
  settings: {
    react: {
      version: 'detect', // eslint-plugin-react에게 사용하고 있는 리액트의 버전을 알아서 탐지하도록 한다.
    },
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
    },
  },
  /* 자바스크립트 버전, 모듈 사용 여부 등을 설정 */
  parserOptions: {
    parser: '@typescript-eslint/parser', // AST 변환기
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  /* extends와 plugins에 대한 세부 설정을 변경 */
  rules: {
    'no-shadow': 'off',
    'no-console': 'off',
    'no-alert': 'off',
    'no-constant-condition': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.tsx', '.ts'] }],
    'no-use-before-define': 'off', // 정의되기 전에 사용되도록 허용 ('React' was used before it was defined)
    '@typescript-eslint/no-use-before-define': ['error'],
    'import/prefer-default-export': 'off',
    'react/require-default-props': 'off',
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          // un-ban a type that's banned by default
          '{}': false,
        },
      },
    ],
    'import/no-extraneous-dependencies': ['error', { devDependencies: ['**/*.stories.+(js|jsx|ts|tsx)'] }],
    // airbnb ESLint 구성의 문제를 해결하기 위함
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    // import order 정의
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', ['sibling', 'parent'], 'object'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@/**',
            group: 'internal',
          },
          {
            pattern: '@+(assets|images|styles)/**',
            group: 'object',
          },
          {
            pattern: '{.,..}/**/*.+(css|sass|less|scss)',
            group: 'object',
          },
          {
            pattern: '*.+(css|sass|less|scss)',
            group: 'object',
            patternOptions: { matchBase: true },
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        warnOnUnassignedImports: true,
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'prettier/prettier': ['error'],
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
    // Chakra-ui
    'chakra-ui/props-order': 'error',
    'chakra-ui/props-shorthand': 'error',
    'chakra-ui/require-specific-component': 'error',
  },
};
