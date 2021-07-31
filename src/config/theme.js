// @flow

import colors from './colors';

const theme = {
  // Color names grabbed from https://coolors.co/

  colors,
  fonts: {
    din: "'din-2014', sans-serif",
    roboto: "'roboto-mono', monospace",
  },

  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 32,
    xl: 64,
    xxl: 96,
  },

  spring: {
    default: { mass: 1, tension: 450, friction: 55 },
  },

  timing: {
    easeInBack: 'cubic-bezier(0.6, -0.28, 0.735, 0.045)',
    easeInOutBack: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    easeOutBack: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',

    easeInCirc: 'cubic-bezier(0.6, 0.04, 0.98, 0.335)',
    easeInOutCirc: 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
    easeOutCirc: 'cubic-bezier(0.075, 0.82, 0.165, 1)',

    easeInQuart: 'cubic-bezier(0.895, 0.03, 0.685, 0.22)',
    easeInOutQuart: 'cubic-bezier(0.77, 0, 0.175, 1)',
    easeOutQuart: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
  },

  tints: {
    aquamarine: { from: colors.mineralGreen, to: colors.aquamarine, fill: colors.mineralGreen },
    blue: { from: colors.blueGreen, to: colors.vividSkyBlue, fill: colors.blueGreen },
    bulk: { from: colors.bulkFrom, to: colors.bulkTo, fill: colors.bulk },
    dark: { from: colors.deepSpaceSparkle, to: colors.gainsboro, fill: colors.deepSpaceSparkle },
    green: { from: colors.polishedPine, to: colors.magicMint, fill: colors.parisGreen },
    malicious: { from: colors.maliciousFrom, to: colors.maliciousTo, fill: colors.malicious },
    'malicious-bec': { from: colors.maliciousBec, to: colors.malicious, fill: colors.maliciousBec },
    none: { from: colors.manatee, to: colors.manatee, fill: colors.manatee },
    orange: { from: colors.pumpkin, to: colors.sunglow, fill: colors.sunglow },
    spam: { from: colors.spamFrom, to: colors.spamTo, fill: colors.spam },
    spoof: { from: colors.spoofFrom, to: colors.spoofTo, fill: colors.spoof },
    sulu: { from: colors.deepSpaceSparkle, to: colors.sulu, fill: colors.deepSpaceSparkle },
    suspicious: { from: colors.suspiciousFrom, to: colors.suspiciousTo, fill: colors.suspicious },
  },
};

export default theme;
export type Theme = typeof theme;
