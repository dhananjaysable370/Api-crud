import random

ai = random.randint(1, 100)
user = -1
attempts = 1
minAttempts = 10

while minAttempts > 0 and ai != user:
    if minAttempts == 0:
        print("Game over!")
        break
    print(f"Your remaining attempts {minAttempts}")
    user = int(input("Enter a number between 1 to 100 : "))
    if user > ai:
        print("Your guess is too high!")
    elif user < ai:
        print("Your guess is too low!")
    else:
        if attempts == 1:
            print(f"You guessed it in {attempts} Attempt.")
        else:
            print(f"You guessed it in {attempts} Attempts..")
    attempts += 1
    minAttempts -= 1

# def passwordGenerator(length):
#     source = string.ascii_letters + string.digits
#     password = ""
#     for i in range(length):
#         password = random.choice(source)
#         print(password, end="")


# passwordGenerator(8)


# def guessGame(number):
