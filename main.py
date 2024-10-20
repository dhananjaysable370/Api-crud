import random


def guessGame():
    ai = random.randint(1, 100)
    user = -1
    attempts = 1
    minAttempts = 10

    while ai != user:
        if minAttempts == 0:
            print(f"Game over! random number was {ai}")
            break
        print(f"Your remaining attempts {minAttempts}")
        print()
        user = int(input("Enter a number between 1 to 100 : "))
        if user > ai:
            print("Your guess is too high!")
            print()
        elif user < ai:
            print("Your guess is too low!")
            print()
        else:
            if attempts == 1:
                print(f"You guessed it in {attempts} Attempt.")
                print()
            elif user == ai:
                print(f"You guessed it in {attempts} Attempts..")
                print()

        attempts += 1
        minAttempts -= 1

guessGame()
