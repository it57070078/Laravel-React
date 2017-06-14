<?php $__env->startSection('edit'); ?>
    <div class="panel panel-info">
        <div class="panel-body">
            <form action="<?php echo e(url('task/'.$etask->id.'/edited')); ?>"  method="POST" class="form-horizontal">
                <div class="form-group">
                        <h3><lable for="name">Edit Task</label></h3>
                    <div class="col-xs-9">
                        <input type="text" name="editname" id="task-name1" class="form-control">
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-offset-3 col-sm-6">
                        <p align="right">
                            <button trpy="submit" class="btn btn-success active" >
                                <span class="glyphicon glyphicon-ok" aria-hidden="true"></span>Save
                            </button>
                        </p>
                    </div>    
                </div>
                <?php echo e(csrf_field()); ?>

            </form>
        </div>
    </div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>