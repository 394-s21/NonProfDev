import json
import sys

def load_file(fname: str) -> dict:
    with open(fname, "r") as fp:
        data = json.load(fp)
    return data

data: dict = {}
for fname in sys.argv[1:]:
    data = {**data, **load_file(fname)}

with open("out.json", "w") as fp:
    json.dump(data, fp)

