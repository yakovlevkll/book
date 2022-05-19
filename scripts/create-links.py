from pathlib import Path

def rm_tree(pth: Path):
    try:
        for child in pth.iterdir():
            if not child.is_dir():
                child.unlink(missing_ok=True)
            else:
                rm_tree(child)

        pth.rmdir()
    except FileNotFoundError:
        pass


DIR = Path('.')

# Cleanup
output_folders = [
Path(DIR / 'src/ru'),
Path(DIR / 'src/en')
]

for el in output_folders:
    rm_tree(el)

# Creating symlinks
for el in DIR.glob('src/**/ru.md'):
    parent = str(el.parent)[3:]
    folder = Path(f'src/{el.stem}/{parent}')
    folder.mkdir(parents=True, exist_ok=True)
    el.link_to(Path(folder / 'index.md'))