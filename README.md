# BSDatePicker - Nepali & Gregorian Date Picker

**Version:** 1.0.0  
**Release Date:** January 5, 2025

## Overview

The BSDatePicker is a robust and user-friendly date picker component supporting both the Nepali (Bikram Sambat) and Gregorian (AD) calendar systems. It offers seamless integration for developers looking to implement dual-language date selection in their applications.

## Features

- **Dual Calendar Support**:  
  Switch effortlessly between Nepali (BS) and Gregorian (AD) calendars.

- **Customizable Date Formats**:  
  Supports popular formats such as `YYYY/MM/DD`, `DD/MM/YYYY`, and `MMMM DD, YYYY`.

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

## Installation

Install the package using npm:

```bash
npm install bs-datepicker
```

````

## Usage

Import and implement the BSDatePicker in your project:

```typescript
import { BSDatePicker } from "bs-datepicker";

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

## Release Notes

### Version 0.1.2

- Initial release of the BSDatePicker component.
- Fully functional support for Nepali and Gregorian calendars.
- Cross-calendar dynamic month/year navigation.
- Customizable date formats and styling.
- Input validation and date range checks.

## Roadmap

- **Range Selection**: Add support for selecting date ranges.
- **Accessibility Improvements**: Enhanced support for screen readers.
- **Custom Themes**: Provide more options for UI customization.

## Support

If you encounter any issues or have suggestions, please reach out to us:

- **Email**: twatisuman@gmail.com

---

Thank you for choosing **BSDatePicker**! 🎉

```

Let me know if you'd like further edits or additions!
```
````
