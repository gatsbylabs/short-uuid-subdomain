# Short UUID Subdomain

Transform UUIDs to be RFC1123 subdomain compliant for Node.js.

Kubernetes has a character limit of [253 for DNS Subdomain names](https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#dns-subdomain-names).
This package was created to shorten and transform UUIDs to be usable as Kubernetes deployment names.

## Usage

```js
import * as sus from "@gatsbylabs/short-uuid-subdomain";
import { v4 as uuid } from "uuid";

const id = uuid();

const shortId = sus.encode(id);
const backAgain = sus.decode(shortId);
```
