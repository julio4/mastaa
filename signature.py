from web3 import Web3

# Replace with the user input for the function name and parameter types, e.g. "myFunction(uint256,string)"
function_input = "diamondCut(string, uint256)"

# Split the function name and parameter types
function_name, parameter_types = function_input.split("(")
parameter_types = parameter_types[:-1].split(",")

# Create a function signature from the function name and parameter types
function_signature = function_name + "(" + "".join(parameter_types) + ")"
function_selector = Web3.keccak(text=function_signature)[:4]

# Print the encoded function selector
print(f"Encoded function selector: {function_selector.hex()}")

