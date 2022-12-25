import { render } from "@testing-library/react";
import { NotFoundPage } from "./not-found.page";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "../../theme/styled-components/themes";
import { expect, describe, it } from "vitest";

describe("Not Found Page Tests", () => {
  it("Should find not found message", async () => {
    const pageJsx = (
      <ThemeProvider theme={mainTheme}>
        <NotFoundPage />
      </ThemeProvider>
    );
    const { findByLabelText } = render(pageJsx);
    const message = await findByLabelText("not-found-message");

    expect(message).toBeDefined();
    expect(message.innerHTML).toBe("PAGE NOT FOUND");
  });
});
