#                   DIFF
# |----------|----------------|
# 0          A(0)            B(0)
#
# DIFF = A(0) - B(0) || B(0) - A(0)
#
# If we assign A to the difference between the two numbers
# Then we assign B to the sum of itself and DIFF B will now equal A(0)
# Then we can assign A to the difference of B and DIFF (which will make it
# equal to B(0))


def num_swap(x,y)
  x = x - y
  y = y + x
  x = y - x
  return x,y
end
