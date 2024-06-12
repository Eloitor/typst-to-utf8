[Typst to UTF-8](https://eloitor.github.io/typst-to-utf8/)
is a [bodge](https://www.youtube.com/watch?v=lIFE7h3m40U) 
to write simple [UTF-8](https://en.wikipedia.org/wiki/UTF-8) math using Typst.
Use the [snippet tab](https://eloitor.github.io/typst-to-utf8/#snippet)
for small math expressions 
and the [text tab](https://eloitor.github.io/typst-to-utf8/#text)
for text containing math in `$...$` or `$$...$$`.

| Mangled Typst | UTF-8 approximation |
| --- | --- |
|`nabla f(x) = 2 x`| `∇𝑓(𝑥) = 2𝑥`|
|`v = diff x/diff t`|`𝑣 = 𝜕𝑥/𝜕𝑡`|
|`EE[(x-mu)^2] = sigma^2`|`𝔼[(𝑥−𝜇)²] = 𝜎²`|
|`lim {x -> oo} 1/x = 0`|`lim {x → ∞} 1/x = 0`|
|`Delta_t <= (1 - kappa)^t Delta_0` | `𝛥ₜ ≤ (1 − 𝜅)ᵗ𝛥₀`|
|`Phi = integral bold(E) dot d bold(A)`|`𝛷 = ∫ 𝐄 ⋅ d𝐀`|
|`diff^2 u/diff x^2 + diff^2 u/diff y^2 = 0`|`𝜕²𝑢/𝜕𝑥² + 𝜕²𝑢/𝜕𝑦² = 0`|
|`cal(N)(x; mu, sigma^2) = exp(-(x - mu)^2/sigma^2)/sqrt(2 pi sigma)`|`𝒩(𝑥; 𝜇, 𝜎²) = exp(−(𝑥 − 𝜇)²/𝜎²)/√̅2̅𝜋𝜎`|


This is a quick and dirty replacement of [known commands](https://eloitor.github.io/typst-to-utf8/map.js)
to matching UTF-8 symbols.
Commands that "do something" rather than produce a symbol, like `mat()`, do not work.

Props to [Günter Milde](http://milde.users.sourceforge.net) for the [Unicode ⟷ Typst mapping](http://milde.users.sourceforge.net/LUCR/Math/).
