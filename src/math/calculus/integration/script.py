def integrate(func, x1, x2, n):
    bars = {}
    area = 0

    delta = (x2 - x1) / n

    for i in range(n):
        x_coord = round(x1 + (i + 0.5) * delta, 5)
        y_coord = func(x_coord)
        bars.setdefault(x_coord, y_coord)
        area += y_coord * delta

    area = round(area, 5)

    return {
        'area': area,
        'bars': bars,
        'n': n,
        'delta': delta
    }


def create_table_md(data):
    delta = data['delta']
    n = data['n']

    table = 'n = {n}\n\n|   | $x$-coordinate | Height | Area |\n| ------ | ------ | ------ | ---- |\n{lines}\n\nA = {areas} = **{total_area}**'

    areas = []
    total_area = 0
    lines = []

    i = 1

    for x_coords, y_coord in data['bars'].items():
        area = round(delta * y_coord, 5)

        areas.append(str(area))
        total_area += area

        line = f'| {i} | {x_coords} | {y_coord} | {delta} · {y_coord} = {area}|'
        lines.append(line)

        i += 1

    contents = {
        'areas': ' + '.join(areas),
        'total_area': total_area,
        'n': n,
        'lines': '\n'.join(
            lines)
    }

    with open(f'./integral-table-n={n}.md', 'w', encoding='utf-8') as f:
        f.write(table.format(**contents))


if __name__ == "__main__":
    def func(x):
        res = x ** 2
        return round(res, 5)

    a = 2
    b = 3

    data = integrate(func, a, b, 10)
    create_table_md(data)

    data = integrate(func, a, b, 20)
    create_table_md(data)
