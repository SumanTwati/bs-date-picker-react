# BSDatePicker - Nepali & Gregorian Date Picker

## Overview

The BSDatePicker is a robust and user-friendly date picker component supporting both the Nepali (Bikram Sambat) and Gregorian (AD) calendar systems. It offers seamless integration for developers looking to implement dual-language date selection in their applications.

## Features

- **Dual Calendar Support**:  
  Switch effortlessly between Nepali (BS) and Gregorian (AD) calendars.

- **Customizable Date Formats**:  
  Supports popular formats such as `YYYY/MM/DD`, `DD/MM/YYYY`, `MMMM DD, YYYY` and other.

- **Dynamic Calendar Display**:

  - Automatic adjustments for months and years across both calendars.
  - Cross-calendar date mapping with highlighted selections.

- **Internationalization**:

  - Nepali numerals for BS dates.
  - English numerals for Gregorian dates.

- **Interactive UI**:

  - Modern popover-based date picker interface.
  - Responsive design with easy navigation.

- **Callback Integration**:  
  Provides selected dates in both calendar formats using an `onDateChange` callback.

---

## Installation

Install the package using npm:

```bash
npm install bs-date-picker-react

or

yarn add bs-date-picker-react

```

---

## Usage

Import and implement the BSDatePicker in your project:

### Basic Example

```tsx
import "bs-date-picker-react/dist/style.css";
import { BSDatePicker } from "bs-date-picker-react";

<BSDatePicker
  language="np"
  format="YYYY-MM-DD"
  onDateChange={(date) => console.log(date)}
/>;
```

### Props

| Prop           | Type     | Default        | Description                                                    |
| -------------- | -------- | -------------- | -------------------------------------------------------------- |
| `onDateChange` | Function | `undefined`    | Callback providing the selected date in both formats.          |
| `defaultValue` | String   | `undefined`    | Initial date value (BS or Gregorian format).                   |
| `language`     | String   | `'en'`         | Language for the calendar (`np` for Nepali, `en` for English). |
| `format`       | String   | `'YYYY-MM-DD'` | Date format.                                                   |

---

## Development Notes

### Dependencies

- **`nepali-date-converter`**: Used to handle date conversions between Nepali and Gregorian calendars.
- **`@radix-ui/react-popover`**: Manages the popover dropdown for the calendar UI.
- **`lucide-react`**: Provides the calendar icon.

### Style and Responsiveness

- The component uses a responsive and accessible design.
- Styling is implemented with utility classes (e.g., Tailwind CSS). Ensure the proper setup of Tailwind or adapt the styles for your project.

### Localization

- Customize day and month names through the `MONTH_NAMES` and `DAY_NAMES` constants.
- Use `toNepaliNumeral` Convert numbers to Nepali numerals when necessary.

---

## Known Limitations

- Events like key navigation for accessibility are not implemented but can be added in future versions.

---

## Release Notes

### Version 1.1.0

- Initial release of the BSDatePicker component.
- Fully functional support for Nepali and Gregorian calendars.
- Cross-calendar dynamic month/year navigation.
- Customizable date formats and styling.
- Input validation and date range checks.

### Version 1.1.1

- Minor Bug fixes

### Version 1.1.2

- Enhance BSDatePicker styling and positioning for better usability
- Padding bug fix for popover contents

---

## Roadmap

- **Range Selection**: Add support for selecting date ranges.
- **Accessibility Improvements**: Enhanced support for screen readers.
- **Custom Themes**: Provide more options for UI customization.

---

## Contribution

We welcome contributions! If you'd like to improve the component, please follow these steps:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/new-feature`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature/new-feature`).
5. Open a pull request.

---

## Support

If you encounter any issues or have suggestions, please reach out to us:

- **Email**: twatisuman@gmail.com

Thank you for choosing **BSDatePicker**! 🎉

Let me know if you'd like further edits or additions!

---

## License

This component is licensed under the **GPL-3.0 License**. See the LICENSE file for details.

---
