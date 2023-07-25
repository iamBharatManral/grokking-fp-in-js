### Points to remember:

1. Functional programming is about mutating immutable states.
2. Shared mutable states within our program lead to complexity due to all the moving parts and effect the predictability.
2. In FP, we try to reduce/eliminate shared mutable state compare to OOP that tries to encapsulate within an object.
3. That's why in FP, we have immutable data structures that go hand in hand with pure functions.
4. Even in case of languages, that don't have native immutable support, there are always "copy-on-write" mechanism to deal with mutable structures natively.
