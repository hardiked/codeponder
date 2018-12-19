import * as React from "react";

import { storiesOf } from "@storybook/react";
import FolderTree from ".";
import { MyButton } from "../MyButton";

storiesOf("FolderTree", module).add("basic example", () => (
  <FolderTree
    getLinkProps={() => {}}
    Link={MyButton}
    items={[
      {
        name: ".dockerignore",
        type: "blob",
      },
      {
        name: ".gitignore",
        type: "blob",
      },
      {
        name: "README.md",
        type: "blob",
      },
      {
        name: "lerna.json",
        type: "blob",
      },
      {
        name: "package.json",
        type: "blob",
      },
      {
        name: "packages",
        type: "tree",
      },
      {
        name: "yarn.lock",
        type: "blob",
      },
    ]}
  />
));
