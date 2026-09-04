# Contributing to Iconify icon sets

There are 3 types of common issues:
- Adding an icon set: please open an issue, see instructions below.
- Adding an icon or several icons: not accepted, see end of this file for explanation.
- Updating other files, such as JavaScript sources: please open an issue with list proposed changes and a pull request with changes.

## Icon sets

If you want to suggest an icon set to add, please create an issue with a link to icon set repository (see "Sources" below).

Do not create pull requests! Pull requests with icon sets are not accepted!

### Limitations

Not all icon sets are accepted.

There are many thousands of icons available, but that does not mean they are useful. 
Iconify is not a collection of random SVG files.

Requirements for icon sets:
- Only open source icon sets are accepted.
- Icons must be usable in UI elements, such as buttons and navigation. High detailed illustrations are not accepted.
- Icon set must be usable. Random stuff, such as car logos and icons specific to your website, do not belong here.

Additionally, the following restrictions apply to most icon sets, but exceptions can be considered on case by case basis:
- Icons with hardcoded palette are rarely accepted because of their limited use. Icons designed for specific apps, such as desktop themes, are not really usable and therefore not accepted.
- Icon sets are automatically kept up to date. In order to keep icon sets up to date, SVG files must be easily available where download can be automated. See below.

If you are not sure if an icon set can be added, just open an issue.

### Sources

In order to keep icon sets up to date, icon sets must be available wherever it is possible to automate download.

Examples:
- Git repositories
- NPM packages

Downloading icons from a website is not an option.

### Consistent UI

While requirements listed above might seem to be strict, they are there for a reason.

When developer creates a UI, icons should have the same layout. If they don't, website looks ugly.

It is preferrable to have icon sets with large choice of consistently designed icons.

### Why not all SVGs are accepted?

There are many thousands of badly designed icons that are not wanted. 
All those icons do, is make it harder to find good usable icons.

If you just want to find one specific icon, do not care if it is a part of set, there are plenty of websites out there that collect all possible SVGs from the internet. 
Iconify project is not one of them.

## Pull requests

Icon set `.json` files are automatically generated, overwriting all `.json` files on each update.

Pull requests with icon sets are not accepted for several reasons:
- All icon sets are automatically updated, overwriting all JSON files.
- All icons are validated and cleaned up. Third party JSON files are not trusted.

Pull requests with fixes and updates to other files are welcome.

## Adding icons

If you want to just add few icons, such as logos, this is not the correct repository.

1. Look at existing icon sets at [Iconify icon sets website](https://icon-sets.iconify.design/).
2. Find an icon set where you icons fit.
3. Click icon set author name, which will lead you to icon set's repository.
4. Open an issue at that repository, if it accepts requests or contributions.

Once your icons are added to that icon set, it will automatically be imported in Iconify within few days.
