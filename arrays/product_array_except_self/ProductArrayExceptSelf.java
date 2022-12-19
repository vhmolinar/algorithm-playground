package arrays.product_array_except_self;

import java.util.Arrays;

public class ProductArrayExceptSelf {

  public static void main(String[] args) {
    var test = new ProductArrayExceptSelf();
    test.validate(new int [] { -1, 1, 0, -3, 3 }, new int [] { 0,0,9,0,0 });
    test.validate(new int [] { 1,2,3,4 }, new int [] { 24,12,8,6 });
  }

  private void validate(int [] input, int[] expectedOutput) {
    var output = productExceptSelf(input);
    assert Arrays.equals(output, expectedOutput)
      : String.format("Result should be %s, but got %s", Arrays.toString(expectedOutput), Arrays.toString(output));
  }

  private int[] productExceptSelf(int[] nums) {
    var resultingProduct = new int [nums.length];

    var historicProduct = new int [nums.length];
    var accumulativeProduct = 1;

    for (var i = 0; i < nums.length; i += 1) {
      resultingProduct[i] = accumulativeProduct;
      accumulativeProduct *= nums[i];
      historicProduct[i] = accumulativeProduct;
    }

    accumulativeProduct = nums[nums.length - 1];
    for (var i = nums.length - 2; i >= 0; i -= 1) {
      resultingProduct[i] *= accumulativeProduct;
      accumulativeProduct *= nums[i];
    }

    return resultingProduct;
  }
}
