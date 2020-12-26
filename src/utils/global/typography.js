import Typography from 'typography';
import stAnnesTheme from 'typography-theme-st-annes';

// stAnnesTheme.overrideThemeStyles = ({ rhythm }) => ({
//   // 'a:hover': {
//   //   boxShadow: 'none',
//   // },

//   'a:active': {
//     fontSize: rhythm(2 / 3),
//     boxShadow: 'none',
//   },
// });

const typography = new Typography(stAnnesTheme);

export const { rhythm, scale } = typography;
export default typography;
