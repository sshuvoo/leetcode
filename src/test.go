package main

func checkEligibility(age int) (bool, string) {
	if age < 18 {
		return  false, "This is not the right time cutie"
	}
	if age >= 40 {
		return  false, "You are enough old! Get married instead!"
	}

	return  true, "Make sure to open your VPN!"
}

func main() {
	isEligible, message := checkEligibility(26)
}