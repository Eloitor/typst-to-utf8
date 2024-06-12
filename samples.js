var samples = [
    'nabla f(x) = 2x',
    'v = diff x/diff t',
    'lim_(x -> oo) 1/x = 0',
    'cos alpha = \\langle u, v\\rangle/\\Vert u\\Vert dot\\Vert v\\Vert',
    'Delta_t <= (1 - kappa)^t Delta_0',
    'exp(pi i) = -1',
    'Phi = integral \\mathbf{E} dot d\\mathbf{A}',
    'diff^2 u/diff x^2 + diff^2 u/diff y^2 = 0',
    'cal(N)(x; mu, sigma^2) = exp(-(x - mu)^2/sigma^2)/sqrt(2 pi sigma)',
    'EE[(x-mu)^2] = sigma^2',
    'sum_(i=1)^n f(x_i) <= f(sum_(i=1)^n x_i)',
];
var samplesText = [
    "Shouldn't it be $\\sum_{i=1}^n$ and not $\\sum_{i=0}^{n-1}$ in " + "\n" +
    "$$\\sum_{i=1}^n f(x_i) \\leq f(\\sum_{i=1}^n x_i)$$" + "\n" +
    "to match the def. in Section 2?",
];
