from enum import Enum

class Option(Enum):
    OPTION1 = 'Option 1'
    OPTION2 = 'Option 2'

args = json.loads(sys.argv[1])
select = Option(args['select'])

if select is Option.OPTION1:
    print(json.dumps("Option 1 was selected"))
else:
    print(json.dumps("Option 1 was not selected"))
