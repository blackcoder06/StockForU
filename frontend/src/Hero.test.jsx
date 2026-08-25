import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import Hero from "./LandingPage/home/Hero";
import { MemoryRouter } from "react-router-dom";

describe("Hero Component", () => {
  test("renders hero image", () => {
    render( <MemoryRouter>
        <Hero />
      </MemoryRouter>
      );

    const heroImage = screen.getByAltText("Hero image");

    expect(heroImage).toBeTruthy();
    expect(heroImage.src).toContain("homeHero.png");
  });

  test("renders signup Button", () => {
    render( <MemoryRouter>
        <Hero />
      </MemoryRouter>
      );

    const signupbutton = screen.getByRole("button" , {name: "/Sign up for free/i"});

    expect(signupbutton).toBeInTheDocument();
    expect(signupbutton).toHaveClass("btn-primary");
  });
});