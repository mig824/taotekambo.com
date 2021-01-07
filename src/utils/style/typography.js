import Typography from 'typography';
import stAnnesTheme from 'typography-theme-st-annes';

stAnnesTheme.baseFontSize = `14px`;
stAnnesTheme.scaleRatio = 1.5;

const typography = new Typography(stAnnesTheme);

export const { rhythm, scale } = typography;
export default typography;
