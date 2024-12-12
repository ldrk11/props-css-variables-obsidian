# Note Properties as CSS Variables
Every property in your file is added as a CSS variable.

For example if you had a properties looked like this:
```yaml
---
test: here is some stuff
---
```
That would turn into:
```css
--prop-test: here is some stuff
--prop-test-string: "here is some stuff"
```
`--prop-test` would obviously be invalid. That's why every property has a string value so here it would be `--prop-test-string`.