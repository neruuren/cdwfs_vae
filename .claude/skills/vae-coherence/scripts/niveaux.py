#!/usr/bin/env python3
"""Compare les niveaux C1-C35 entre les fichiers de bloc et synthese_vae.md.
Usage : python3 .claude/skills/vae-coherence/scripts/niveaux.py [racine_du_depot]"""
import re, sys, pathlib
root = pathlib.Path(sys.argv[1] if len(sys.argv) > 1 else '.')
blocs = {}
for f in sorted(root.glob('bloc*_*.md')):
    cur = None
    for line in f.read_text(encoding='utf-8').splitlines():
        m = re.match(r'##\s+(C\d+)\s*:', line)
        if m: cur = m.group(1)
        m = re.search(r'Niveau de maîtrise\s*:\s*(\d)', line)
        if m and cur and cur not in blocs:
            blocs[cur] = (int(m.group(1)), f.name)
synth = {}
s = root / 'synthese_vae.md'
if s.exists():
    for line in s.read_text(encoding='utf-8').splitlines():
        m = re.match(r'\|\s*(C\d+)\s*\|[^|]*\|\s*(\d)\s*\|', line)
        if m and m.group(1) not in synth:
            synth[m.group(1)] = int(m.group(2))
ok = True
for i in range(1, 36):
    k = f'C{i}'
    b = blocs.get(k); sv = synth.get(k)
    if b is None: print(f'MANQUANT  {k} absent des fichiers de bloc'); ok = False
    elif sv is None: print(f'MANQUANT  {k} absent du tableau de synthese_vae.md'); ok = False
    elif b[0] != sv: print(f'ECART     {k} bloc={b[0]} ({b[1]}) synthese={sv}'); ok = False
dist = {n: sum(1 for v in blocs.values() if v[0] == n) for n in (4, 3, 2, 1)}
print('Répartition (fichiers de bloc) :', ', '.join(f'niveau {n} = {c}' for n, c in dist.items()))
acq = dist[4] + dist[3]
print(f'Acquises (3-4) : {acq}/35 = {acq*100//35} %  (repère 3iL : 80-85 %)')
print('OK : niveaux cohérents' if ok else 'À CORRIGER')
