import Typography from 'typography';
import stAnnesTheme from 'typography-theme-st-annes';

// stAnnesTheme.overrideThemeStyles = ({ rhythm }) => ({
//   // 'a:hover': {
//   //   boxShadow: 'none',
//   // },

//   // 'a:active': {
//   //   fontSize: rhythm(2 / 3),
//   //   boxShadow: 'none',
//   // },
// });

stAnnesTheme.baseFontSize = '14px';
stAnnesTheme.scaleRatio = 1.5;

const typography = new Typography(stAnnesTheme);

export const { rhythm, scale } = typography;
export default typography;
