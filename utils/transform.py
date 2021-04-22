import json
import sys

if len(sys.argv) < 4:
    print(f"Usage: python3 {sys.argv[0]} <inp.json> <out.json> <key>")
    sys.exit(1)

inp_f = sys.argv[1]
out_f = sys.argv[2]
key = sys.argv[3]

with open(inp_f, "r") as fp:
    data = json.load(fp)

obj = {}
for item in data[key]:
    obj[item["id"]] = item

data[key] = obj
with open(out_f, "w") as fp:
    json.dump(data, fp)
