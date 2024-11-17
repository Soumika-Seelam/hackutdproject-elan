import * as StyleSheet from './utils/StyleSheet';

import Breakpoints from './utils/Breakpoints';

import palettes from './themes/palettes';

export const LinkStyles = theme =>
  StyleSheet.create({
    Link: { style: { color: theme.colors.branding.primary }, props: {} },
  });

export const ButtonStyles = theme =>
  StyleSheet.create({
    Button: {
      style: {
        backgroundColor: theme.colors.branding.primary,
        borderRadius: 8,
        fontFamily: 'System',
        fontWeight: '700',
        textAlign: 'center',
      },
      props: {},
    },
  });

export const ZStackStyles = theme =>
  StyleSheet.create({
    'Z Stack': { style: { flexDirection: 'row' }, props: {} },
  });

export const CircleStyles = theme =>
  StyleSheet.create({
    Circle: {
      style: {
        alignItems: 'center',
        backgroundColor: theme.colors.branding.primary,
        justifyContent: 'center',
      },
      props: {},
    },
  });

export const TextInputStyles = theme =>
  StyleSheet.create({
    'Text Input': {
      style: {
        borderBottomWidth: 1,
        borderColor: theme.colors.border.brand,
        borderLeftWidth: 1,
        borderRadius: 8,
        borderRightWidth: 1,
        borderTopWidth: 1,
        paddingBottom: 8,
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 8,
      },
      props: {},
    },
  });

export const ImageBackgroundStyles = theme =>
  StyleSheet.create({ 'Image Background': { style: { flex: 1 }, props: {} } });

export const TextStyles = theme =>
  StyleSheet.create({
    Text: { style: { color: theme.colors.text.strong }, props: {} },
  });

export const PinInputStyles = theme =>
  StyleSheet.create({
    'Pin Input': {
      style: {
        alignItems: 'center',
        borderColor: theme.colors.text.medium,
        borderRadius: 5,
        borderWidth: 1,
        color: theme.colors.text.strong,
        flex: 1,
        fontSize: 25,
        justifyContent: 'center',
        marginLeft: 5,
        marginRight: 5,
        maxHeight: 70,
        maxWidth: 70,
        padding: 5,
      },
      props: {},
    },
  });

export const ImageStyles = theme =>
  StyleSheet.create({
    Image: { style: { height: 100, width: 100 }, props: {} },
  });
