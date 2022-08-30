ops = ["5", "2", "C", "D", "+"]
outputList = []
output = 0

for i in ops:
    if i == "C":
        outputList.pop()
    elif i =="D":
        outputList.append(outputList[-1]*2)
    elif i == "+":
        outputList.append(outputList[-1]+outputList[-2])
    else:
        outputList.append(int(i))

output = sum(outputList)        

print(outputList)        
print(output)