import * as Types from "./types";
export default [
  {
    find: /\.isMobile.*\.color.*\.style/,
    replacements: [
      {
        match: /(\.isMobile.*\.color.*(\w+)\.style.*\("svg".*\n.*children:)(\[.*\)\])/gm,
        replace: `$1replugged.plugins.getExports('Tharki.FluentStatusIcons').patchDirectMessageStatus($2, $3)`,
      },
    ],
  },
] as Types.DefaultTypes.PlaintextPatch[];
