import { useState } from 'react';

import {
  Box,
  Checkbox,
  CheckboxGroup,
  Divider,
  Flex,
  Heading,
  HStack,
  Icon,
  Stack,
  ThemeTypings,
  useTheme,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { MdOutlineEmail as MdOutlineEmailIcon } from 'react-icons/md';

export default {
  title: 'Forms/Checkbox',
  component: Checkbox,
  argTypes: {},
};

export const Default = () => {
  return <Checkbox defaultChecked>Checkbox</Checkbox>;
};

export const SizeVariant = () => {
  const theme = useTheme();

  const checkboxProps = theme.components.Checkbox;
  const VARIANT_LIST = Object.keys(checkboxProps.variants) as ThemeTypings['components']['Checkbox']['variants'][];
  const SIZE_LIST = Object.keys(checkboxProps.sizes) as ThemeTypings['components']['Checkbox']['sizes'][];

  return (
    <Stack divider={<Divider />} spacing={3}>
      {VARIANT_LIST.length ? (
        VARIANT_LIST.map((variant) => (
          <Box key={variant}>
            <Heading mb="16px">{(variant as string).toUpperCase()}</Heading>
            {SIZE_LIST.map((size) => (
              <Checkbox key={size} size={size} variant={variant}>
                {size.toUpperCase()}
              </Checkbox>
            ))}
            <Checkbox isDisabled size="sm" variant={variant}>
              DISABLED
            </Checkbox>
          </Box>
        ))
      ) : (
        <HStack spacing={3}>
          {SIZE_LIST.map((size) => (
            <Checkbox key={size} mr="10px" size={size}>
              {size.toUpperCase()}
            </Checkbox>
          ))}
        </HStack>
      )}
    </Stack>
  );
};

export const ColorScheme = () => {
  const theme = useTheme();

  const colorsProps = theme.colors;
  const COLOR_LIST = Object.keys(colorsProps).filter(
    (color) => typeof colorsProps[color] === 'object',
  ) as ThemeTypings['colors'][];

  return (
    <Wrap spacing={4}>
      {COLOR_LIST.map((colorScheme) => (
        <WrapItem key={colorScheme}>
          <Flex
            align="center"
            justify="center"
            direction="column"
            rowGap={3}
            color={colorScheme.includes('white') ? 'white' : undefined}
            bgImage={colorScheme.includes('white') ? 'url("https://bit.ly/2Z4KKcF")' : undefined}
            bgPosition="center"
          >
            <Checkbox colorScheme={colorScheme} isChecked size="md">
              {colorScheme.charAt(0).toUpperCase() + colorScheme.slice(1)}
            </Checkbox>
            <Checkbox colorScheme={colorScheme} isChecked isDisabled size="sm">
              Disabled
            </Checkbox>
          </Flex>
        </WrapItem>
      ))}
    </Wrap>
  );
};

export const DisabledCheckbox = () => {
  return (
    <Stack direction="row" spacing={5}>
      <Checkbox isDisabled>Checkbox</Checkbox>
      <Checkbox defaultChecked isDisabled>
        Checkbox
      </Checkbox>
    </Stack>
  );
};

export const Invalid = () => {
  return <Checkbox isInvalid>Checkbox</Checkbox>;
};

export const Spacing = () => {
  return <Checkbox spacing="1rem">Checkbox</Checkbox>;
};

export const IconColorSize = () => {
  return (
    <Checkbox iconColor="red.400" iconSize="1rem">
      Checkbox
    </Checkbox>
  );
};

export const Indeterminate = () => {
  const [checkedItems, setCheckedItems] = useState([false, false]);

  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

  return (
    <>
      <Checkbox
        isChecked={allChecked}
        isIndeterminate={isIndeterminate}
        onChange={(e) => setCheckedItems([e.target.checked, e.target.checked])}
      >
        Parent Checkbox
      </Checkbox>
      <Stack mt={1} pl={6} spacing={1}>
        <Checkbox isChecked={checkedItems[0]} onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])}>
          Child Checkbox 1
        </Checkbox>
        <Checkbox isChecked={checkedItems[1]} onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}>
          Child Checkbox 2
        </Checkbox>
      </Stack>
    </>
  );
};

export const WithIcon = () => {
  return (
    <Checkbox colorScheme="cyan" icon={<Icon as={MdOutlineEmailIcon} />}>
      Hello world
    </Checkbox>
  );
};

export const WithCheckboxGroup = () => {
  return (
    <CheckboxGroup colorScheme="green" defaultValue={['naruto', 'kakashi']}>
      <Stack>
        <Checkbox value="naruto">Naruto</Checkbox>
        <Checkbox value="sasuke">Sasuke</Checkbox>
        <Checkbox value="kakashi">Kakashi</Checkbox>
      </Stack>
    </CheckboxGroup>
  );
};
