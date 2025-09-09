# REST Countries Explorer

## Description

**REST Countries Explorer** is a **React + Vite + Tailwind CSS** application that fetches country data from the **REST Countries API** and allows users to search and filter countries by name and region.

The project is optimized with:

- **Lazy loading** for components and images
- **Dark/Light theme toggle** using `ThemeContext`
- **Shimmer placeholders** during data loading
- **Unit tests** for search and filter functionality

---

## Features

- **Search & Filter**
  - Search countries by name (case-insensitive)
  - Filter countries by region

- **Lazy Loading**
  - Components (`CountryCard`, `CountriesList`, `CountryDetails`) are lazy-loaded
  - Images are lazy-loaded for better performance

- **Theme Support**
  - Dark and light mode using `ThemeContext.jsx` and `useTheme.js`

- **Shimmer / Loading Placeholders**
  - `CountriesListShimmer.jsx` for country list loading
  - `CountryDetailShimmer.jsx` for country details loading

- **Error Handling**
  - `Error.jsx` component for API or routing errors

- **Testing**
  - Unit tests implemented for `useSearchFilter.js`

---

## Project Structure

### Pages

- **Home.jsx**
  - Main page displaying countries list
  - Integrates `SearchBar.jsx`, `FilterMenu.jsx`, `CountriesList.jsx`

- **Error.jsx**
  - Shows fallback UI in case of API or routing errors

- **CountryDetails.jsx**
  - **CountryDetails.jsx** – Displays detailed info of selected country.
  - Also shows border countries, and you can navigate to a border country by clicking on it.

---

### Components

- **Header.jsx** – Top navigation bar with logo, theme toggle, etc.
- **Home.jsx** – Main page component that combines search, filter, and countries list
- **SearchBar.jsx** – Input for country search
- **FilterMenu.jsx** – Dropdown for region filter
- **CountriesList.jsx** – Renders list of country cards
- **CountryCard.jsx** – Individual country card with lazy-loaded image
- **CountriesListShimmer.jsx** – Loading placeholder for country list
- **CountryDetailShimmer.jsx** – Loading placeholder for country details
- **CountryDetails.jsx** – Displays detailed info of selected country
- **Error.jsx** – Fallback component for API or routing errors

---

### Hooks & Context

- **ThemeContext.jsx** – Provides theme globally
- **ThemeProvider.jsx** – Wraps app and provides theme state
- **useTheme.js** – Custom hook for toggling dark/light mode
- **useSearchFilter.js** – Custom hook for filtering countries by name & region

---

## Installation

### Prerequisites

- Node.js >= 18
- npm

### Steps

```bash
# Clone the repository
git clone <repo-url>
cd <project-folder>

# Install dependencies
npm install

# Start development server
npm run dev
```

Running Tests

# Run unit tests

npm run test

Example Test Case for useSearchFilter.js:

import { useSearchFilter } from './useSearchFilter';

test('filters countries by name and region', () => {
const data = [
{ name: { common: 'India' }, region: 'Asia' },
{ name: { common: 'Germany' }, region: 'Europe' },
];
const result = useSearchFilter(data, 'India', 'Asia');
expect(result.length).toBe(1);
});

# Styling

- Fully styled with Tailwind CSS for responsive and modern UI

- Dark/Light mode supported

# API

- Data fetched from REST Countries API

- API used to populate country list and country details dynamically

# Deployment

- Build project for production:

- npm run build

- Deploy using Netlify, Vercel, or any static hosting
