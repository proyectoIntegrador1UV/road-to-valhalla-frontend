import Login from "../login/components/Login";
import axios from 'axios';
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import React from "react";

describe("Login component", () => {
    afterEach(() => {
        jest.restoreAllMocks();
    });

    test("should render login component", () => {
        render(<Login setIsToken={false} />);
        expect(screen.findByLabelText('Usuario')).toBeInTheDocument();
    });
});
