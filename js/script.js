var width_in    = document.getElementById("width_in").value;
var height_in   = document.getElementById("height_in").value;
var depth_in    = document.getElementById("depth_in").value;

document.getElementById("w_in").innerHTML = width_in;
document.getElementById("h_in").innerHTML = height_in;
document.getElementById("d_in").innerHTML = depth_in;

reset_to_default()

document.getElementById("width_in").addEventListener("change", update);
document.getElementById("height_in").addEventListener("change", update);
document.getElementById("depth_in").addEventListener("change", update);

document.getElementById("kernel_w").addEventListener("change", update);
document.getElementById("kernel_h").addEventListener("change", update);
document.getElementById("kernel_d").addEventListener("change", update);

document.getElementById("stride_w").addEventListener("change", update);
document.getElementById("stride_h").addEventListener("change", update);
document.getElementById("stride_d").addEventListener("change", update);

document.getElementById("dilation").addEventListener("change", update);
document.getElementById("padding").addEventListener("change", update);


function update()
{
    var width_in    = document.getElementById("width_in").value;
    var height_in   = document.getElementById("height_in").value;
    var depth_in    = document.getElementById("depth_in").value;

    var kernel_w    = document.getElementById("kernel_w").value;
    var kernel_h    = document.getElementById("kernel_h").value;
    var kernel_d    = document.getElementById("kernel_d").value;

    var stride_w    = document.getElementById("stride_w").value;
    var stride_h    = document.getElementById("stride_h").value;
    var stride_d    = document.getElementById("stride_d").value;

    var dilation    = document.getElementById("dilation").value;
    var padding     = document.getElementById("padding").value;

    var currentOp = document.getElementById("convDim").value;

    document.getElementById("w_in").innerHTML = width_in;
    document.getElementById("h_in").innerHTML = height_in;
    document.getElementById("d_in").innerHTML = depth_in;
    // Conv 1D
    if(currentOp == 1)
    {
        // Input
        document.getElementById("width_in").disabled = false;
        document.getElementById("height_in").disabled = true;
        document.getElementById("depth_in").disabled = true;

        // Kernel
        document.getElementById("kernel_w").disabled = false;
        document.getElementById("kernel_h").disabled = true;
        document.getElementById("kernel_d").disabled = true;

        // Stride
        document.getElementById("stride_w").disabled = false;
        document.getElementById("stride_h").disabled = true;
        document.getElementById("stride_d").disabled = true;

        // Output elements
        document.getElementById("h_in_x").style.display = "none";
        document.getElementById("h_in").style.display = "none";

        document.getElementById("d_in").style.display = "none";
        document.getElementById("d_in_x").style.display = "none";

        document.getElementById("h_out_x").style.display = "none";
        document.getElementById("h_out").style.display = "none";

        document.getElementById("d_out").style.display = "none";
        document.getElementById("d_out_x").style.display = "none";

        document.getElementById("w_out").innerHTML = calculate_conv1d(parseInt(width_in), 
                                                                      parseInt(kernel_w),
                                                                      parseInt(stride_w),
                                                                      parseInt(dilation),
                                                                      parseInt(padding));
    }
    // Conv 2D
    if(currentOp == 2)
    {
        // Input
        document.getElementById("width_in").disabled = false;
        document.getElementById("height_in").disabled = false;
        document.getElementById("depth_in").disabled = true;

        // Kernel
        document.getElementById("kernel_w").disabled = false;
        document.getElementById("kernel_h").disabled = false;
        document.getElementById("kernel_d").disabled = true;

        // Stride
        document.getElementById("stride_w").disabled = false;
        document.getElementById("stride_h").disabled = false;
        document.getElementById("stride_d").disabled = true;

        // Output elements
        document.getElementById("h_in_x").style.display = "inline";
        document.getElementById("h_in").style.display = "inline";

        document.getElementById("d_in").style.display = "none";
        document.getElementById("d_in_x").style.display = "none";

        document.getElementById("h_out_x").style.display = "inline";
        document.getElementById("h_out").style.display = "inline";

        document.getElementById("d_out").style.display = "none";
        document.getElementById("d_out_x").style.display = "none";

        document.getElementById("w_in").innerHTML = width_in;
        document.getElementById("h_in").innerHTML = height_in;

        document.getElementById("w_out").innerHTML = calculate_conv1d(parseInt(width_in), 
                                                                      parseInt(kernel_w),
                                                                      parseInt(stride_w),
                                                                      parseInt(dilation),
                                                                      parseInt(padding));
    
        document.getElementById("h_out").innerHTML = calculate_conv1d(parseInt(height_in), 
                                                                      parseInt(kernel_h),
                                                                      parseInt(stride_h),
                                                                      parseInt(dilation),
                                                                      parseInt(padding));
    }
    // Conv 3D
    if(currentOp == 3)
    {
        // Input
        document.getElementById("width_in").disabled = false;
        document.getElementById("height_in").disabled = false;
        document.getElementById("depth_in").disabled = false;

        // Kernel
        document.getElementById("kernel_w").disabled = false;
        document.getElementById("kernel_h").disabled = false;
        document.getElementById("kernel_d").disabled = false;

        // Stride
        document.getElementById("stride_w").disabled = false;
        document.getElementById("stride_h").disabled = false;
        document.getElementById("stride_d").disabled = false;

        // Output elements
        document.getElementById("h_in_x").style.display = "inline";
        document.getElementById("h_in").style.display = "inline";

        document.getElementById("d_in").style.display = "inline";
        document.getElementById("d_in_x").style.display = "inline";

        document.getElementById("h_out_x").style.display = "inline";
        document.getElementById("h_out").style.display = "inline";

        document.getElementById("d_out").style.display = "inline";
        document.getElementById("d_out_x").style.display = "inline";

        document.getElementById("w_out").innerHTML = calculate_conv1d(parseInt(width_in), 
                                                                      parseInt(kernel_w),
                                                                      parseInt(stride_w),
                                                                      parseInt(dilation),
                                                                      parseInt(padding));
    
        document.getElementById("h_out").innerHTML = calculate_conv1d(parseInt(height_in), 
                                                                      parseInt(kernel_h),
                                                                      parseInt(stride_h),
                                                                      parseInt(dilation),
                                                                      parseInt(padding));

        document.getElementById("d_out").innerHTML = calculate_conv1d(parseInt(depth_in), 
                                                                      parseInt(kernel_d),
                                                                      parseInt(stride_d),
                                                                      parseInt(dilation),
                                                                      parseInt(padding));
    }
    // Transposed Conv 1D
    if(currentOp == 4)
    {
        // Input
        document.getElementById("width_in").disabled = false;
        document.getElementById("height_in").disabled = true;
        document.getElementById("depth_in").disabled = true;

        // Kernel
        document.getElementById("kernel_w").disabled = false;
        document.getElementById("kernel_h").disabled = true;
        document.getElementById("kernel_d").disabled = true;

        // Stride
        document.getElementById("stride_w").disabled = false;
        document.getElementById("stride_h").disabled = true;
        document.getElementById("stride_d").disabled = true;

        // Output elements
        document.getElementById("h_in_x").style.display = "none";
        document.getElementById("h_in").style.display = "none";

        document.getElementById("d_in").style.display = "none";
        document.getElementById("d_in_x").style.display = "none";

        document.getElementById("h_out_x").style.display = "none";
        document.getElementById("h_out").style.display = "none";

        document.getElementById("d_out").style.display = "none";
        document.getElementById("d_out_x").style.display = "none";

        document.getElementById("w_out").innerHTML = calculate_transposedConv1d(parseInt(width_in), 
                                                                                parseInt(kernel_w),
                                                                                parseInt(stride_w),
                                                                                parseInt(dilation),
                                                                                parseInt(padding));
    }
    // Transposed Conv 2D
    if(currentOp == 5)
    {
        // Input
        document.getElementById("width_in").disabled = false;
        document.getElementById("height_in").disabled = false;
        document.getElementById("depth_in").disabled = true;

        // Kernel
        document.getElementById("kernel_w").disabled = false;
        document.getElementById("kernel_h").disabled = false;
        document.getElementById("kernel_d").disabled = true;

        // Stride
        document.getElementById("stride_w").disabled = false;
        document.getElementById("stride_h").disabled = false;
        document.getElementById("stride_d").disabled = true;

        // Output elements
        document.getElementById("h_in_x").style.display = "inline";
        document.getElementById("h_in").style.display = "inline";

        document.getElementById("d_in").style.display = "none";
        document.getElementById("d_in_x").style.display = "none";

        document.getElementById("h_out_x").style.display = "inline";
        document.getElementById("h_out").style.display = "inline";

        document.getElementById("d_out").style.display = "none";
        document.getElementById("d_out_x").style.display = "none";

        document.getElementById("w_out").innerHTML = calculate_transposedConv1d(parseInt(width_in), 
                                                                                parseInt(kernel_w),
                                                                                parseInt(stride_w),
                                                                                parseInt(dilation),
                                                                                parseInt(padding));
    
        document.getElementById("h_out").innerHTML = calculate_transposedConv1d(parseInt(height_in), 
                                                                                parseInt(kernel_h),
                                                                                parseInt(stride_h),
                                                                                parseInt(dilation),
                                                                                parseInt(padding));
    }
    // Transposed Conv 3D
    if(currentOp == 6)
    {
        // Input
        document.getElementById("width_in").disabled = false;
        document.getElementById("height_in").disabled = false;
        document.getElementById("depth_in").disabled = false;

        // Kernel
        document.getElementById("kernel_w").disabled = false;
        document.getElementById("kernel_h").disabled = false;
        document.getElementById("kernel_d").disabled = false;

        // Stride
        document.getElementById("stride_w").disabled = false;
        document.getElementById("stride_h").disabled = false;
        document.getElementById("stride_d").disabled = false;

        // Output elements
        document.getElementById("h_in_x").style.display = "inline";
        document.getElementById("h_in").style.display = "inline";

        document.getElementById("d_in").style.display = "inline";
        document.getElementById("d_in_x").style.display = "inline";

        document.getElementById("h_out_x").style.display = "inline";
        document.getElementById("h_out").style.display = "inline";

        document.getElementById("d_out").style.display = "inline";
        document.getElementById("d_out_x").style.display = "inline";

        document.getElementById("w_out").innerHTML = calculate_transposedConv1d(parseInt(width_in), 
                                                                                parseInt(kernel_w),
                                                                                parseInt(stride_w),
                                                                                parseInt(dilation),
                                                                                parseInt(padding));
    
        document.getElementById("h_out").innerHTML = calculate_transposedConv1d(parseInt(height_in), 
                                                                                parseInt(kernel_h),
                                                                                parseInt(stride_h),
                                                                                parseInt(dilation),
                                                                                parseInt(padding));

        document.getElementById("d_out").innerHTML = calculate_transposedConv1d(parseInt(depth_in), 
                                                                                parseInt(kernel_d),
                                                                                parseInt(stride_d),
                                                                                parseInt(dilation),
                                                                                parseInt(padding));
    }
}

function calculate_conv1d(side_in, 
                          kernel, stride, dilation, padding)
{
    return Math.floor((side_in + (2*padding) - dilation*(kernel - 1) - 1) /stride + 1);
}

function calculate_transposedConv1d(side_in, 
                                    kernel, stride, dilation, padding)
{
    // https://pytorch.org/docs/stable/generated/torch.nn.ConvTranspose1d.html#torch.nn.ConvTranspose1d
    return ((side_in - 1) * stride - (2*padding) + dilation * (kernel - 1) + 1);
}

function reset_to_default()
{
    document.getElementById("convDim").value = 0;

    var width_in    = document.getElementById("width_in").value;
    var height_in   = document.getElementById("height_in").value;
    var depth_in    = document.getElementById("depth_in").value;
    
    document.getElementById("w_in").innerHTML = width_in;
    document.getElementById("h_in").innerHTML = height_in;
    document.getElementById("d_in").innerHTML = depth_in;

    // Input
    document.getElementById("width_in").disabled = true;
    document.getElementById("height_in").disabled = true;
    document.getElementById("depth_in").disabled = true;

    // Kernel
    document.getElementById("kernel_w").disabled = true;
    document.getElementById("kernel_h").disabled = true;
    document.getElementById("kernel_d").disabled = true;

    document.getElementById("kernel_w").value = 1;
    document.getElementById("kernel_h").value = 1;
    document.getElementById("kernel_d").value = 1;

    // Stride
    document.getElementById("stride_w").disabled = true;
    document.getElementById("stride_h").disabled = true;
    document.getElementById("stride_d").disabled = true;

    document.getElementById("stride_w").value = 1;
    document.getElementById("stride_h").value = 1;
    document.getElementById("stride_d").value = 1;

    // Dilation and Padding
    document.getElementById("dilation").value = 1;
    document.getElementById("padding").value = 0;

    document.getElementById("h_in_x").style.display = "none";
    document.getElementById("h_in").style.display = "none";

    document.getElementById("d_in").style.display = "none";
    document.getElementById("d_in_x").style.display = "none";

    document.getElementById("h_out_x").style.display = "none";
    document.getElementById("h_out").style.display = "none";

    document.getElementById("d_out").style.display = "none";
    document.getElementById("d_out_x").style.display = "none";
}